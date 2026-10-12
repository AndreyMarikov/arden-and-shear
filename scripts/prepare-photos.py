"""Cuts website-ready derivatives from the originals in source-images/. Originals are never modified."""
from PIL import Image
import os, shutil

Image.MAX_IMAGE_PIXELS = None
OUT = "public/assets"
def save(im, rel, q=90):
    path = f"{OUT}/{rel}.webp"; os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, "WEBP", quality=q, method=6); print(f"{rel}.webp", im.size)

def crop_ratio(im, box, ratio, ax=0.5, ay=0.5, inset=6):
    """Crop `box` (x0,y0,x1,y1), inset to avoid edge bleed, then to `ratio` (w/h), anchored by (ax, ay)."""
    x0, y0, x1, y1 = box[0] + inset, box[1] + inset, box[2] - inset, box[3] - inset
    w, h = x1 - x0, y1 - y0
    if w / h > ratio: nw, nh = round(h * ratio), h
    else: nw, nh = w, round(w / ratio)
    cx, cy = x0 + round((w - nw) * ax), y0 + round((h - nh) * ay)
    return im.crop((cx, cy, cx + nw, cy + nh))

# ---- Team: 2x2 sheet, 4:5 cells, white gutters at x 2221-2263 and y 2782-2819 ----
team = Image.open("source-images/team-sheet.png").convert("RGB")
cells = {  # file -> (cell box, vertical anchor). Top row keeps its headroom (curls touch the top edge).
    "team-01": ((0, 0, 2221, 2782), 0.0),        # Mateo Arden
    "team-02": ((0, 2820, 2221, 5608), 0.0),     # Priya Shah
    "team-03": ((2264, 2820, 4488, 5608), 0.0),  # Jonah Whitlock
    "team-04": ((2264, 0, 4488, 2782), 0.0),     # Lena Okafor
}
for name, (box, ay) in cells.items():
    save(crop_ratio(team, box, 4 / 5, ay=ay, inset=8).resize((1200, 1500), Image.LANCZOS), f"team/{name}")

# ---- Hero: single scene, already exactly 3:2 ----
save(Image.open("source-images/hero-scene.png").convert("RGB"), "hero/hero", q=88)

# ---- Gallery: 12 frames from the collage; order balances the three CSS columns ----
col = Image.open("source-images/gallery-collage.png").convert("RGB")
R1 = [(263,236,1320,1503),(1413,235,2461,1500),(2547,235,3601,1503),(3693,235,4741,1500),(4823,234,5880,1500)]
R2 = [(273,1577,1451,2759),(1653,1577,2912,2762),(3094,1577,4353,2762),(4547,1570,5882,2764)]
R3 = [(272,2830,1982,3889),(2120,2829,4014,3888),(4163,2831,5873,3890)]
P, S, L = 4 / 5, 1.0, 3 / 2
plan = [  # file, source box, ratio, horizontal anchor. Reading order = top-to-bottom, column by column (4 per column).
    ("cut-01", R1[0], P, .5), ("cut-02", R2[0], S, .5), ("cut-03", R1[4], P, .5), ("cut-04", R3[1], L, .55),   # column 1
    ("cut-05", R1[1], P, .5), ("cut-06", R2[1], S, .5), ("cut-07", R1[3], P, .5), ("cut-08", R3[0], L, .5),    # column 2
    ("cut-09", R2[2], S, .5), ("cut-10", R1[2], P, .5), ("cut-11", R2[3], S, .75), ("cut-12", R3[2], L, .5),   # column 3
]
for name, box, ratio, ax in plan:
    save(crop_ratio(col, box, ratio, ax=ax), f"gallery/{name}")

# ---- Interiors: left frame is full-bleed portrait, right frame sits on a cream margin ----
room = Image.open("source-images/interior-collage.png").convert("RGB")
save(crop_ratio(room, (0, 0, 2456, 4096), 4 / 5, ay=0.14, inset=6), "interior/interior-01")
save(crop_ratio(room, (2552, 792, 6062, 3264), 3 / 2, ay=0.75, inset=4), "interior/interior-02")

# Next.js caches optimized copies by URL; replacing files in place would otherwise keep serving the old ones.
shutil.rmtree(".next/cache/images", ignore_errors=True)
