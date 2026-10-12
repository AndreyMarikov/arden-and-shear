"""Builds the vector brand assets. Lettering is converted to outlines (no font needed to render)."""
import html
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

FR = "node_modules/@fontsource/fraunces/files/fraunces-latin-600-normal.woff"
IS = "node_modules/@fontsource/instrument-sans/files/instrument-sans-latin-500-normal.woff"
INK, CREAM, CLAY, SAND, TAUPE = "#26211c", "#f6efe2", "#b4593b", "#e6d9c2", "#a8947a"

def text_path(font_file, text, size, x, y, track=0.0):
    f = TTFont(font_file); gs = f.getGlyphSet(); cmap = f.getBestCmap()
    s = size / f["head"].unitsPerEm; d = []; cx = x
    for ch in text:
        g = cmap[ord(ch)]; pen = SVGPathPen(gs, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
        gs[g].draw(TransformPen(pen, (s, 0, 0, -s, cx, y))); d.append(pen.getCommands())
        cx += f["hmtx"][g][0] * s + track * size
    return " ".join(d), cx - x - track * size

def mark(arch, a, bar, tf=""):
    return (f'<g {tf}><path d="M6 68V32C6 14 18 4 32 4C46 4 58 14 58 32V68Z" fill="{arch}"/>'
            f'<path d="M20 56 32 20 44 56" fill="none" stroke="{a}" stroke-width="5"/>'
            f'<path d="M24 43.5 38.4 38.5" stroke="{bar}" stroke-width="4"/></g>')

def svg(w, h, body, title):
    title = html.escape(title)
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" width="{w:.0f}" height="{h:.0f}" '
            f'role="img" aria-label="{title}"><title>{title}</title>{body}</svg>\n')

def write(name, content): open(f"public/brand/{name}", "w").write(content)

NAME, TAG = "Arden & Shear", "BARBERS & HAIR STUDIO"
variants = {"": (INK, CREAM, CLAY, INK), "-light": (CREAM, INK, CLAY, CREAM)}  # arch, A, bar, text

for suf, (arch, a, bar, txt) in variants.items():
    # compact: mark + wordmark, no tagline
    d, tw = text_path(FR, NAME, 28, 44, 29.5, -0.01)
    write(f"logo-compact{suf}.svg", svg(44 + tw, 40, mark(arch, a, bar, 'transform="translate(0 2) scale(.5)"') + f'<path d="{d}" fill="{txt}"/>', f"{NAME} — {TAG.title()}"))
    # full: large mark + wordmark + tagline
    d, tw = text_path(FR, NAME, 46, 90, 41, -0.01)
    t, gw = text_path(IS, TAG, 11, 92, 64, 0.3)
    write(f"logo-full{suf}.svg", svg(90 + max(tw, gw + 2), 72, mark(arch, a, bar) + f'<path d="{d}" fill="{txt}"/><path d="{t}" fill="{TAUPE if suf == "" else SAND}"/>', f"{NAME} — {TAG.title()}"))
    # standalone mark
    write(f"brand-mark{suf}.svg", svg(64, 72, mark(arch, a, bar), f"{NAME} brand mark"))

# favicon: heavier strokes so it survives 16px
write("favicon.svg", svg(64, 64, f'<path d="M5 62V29C5 13 17 2 32 2S59 13 59 29V62Z" fill="{INK}"/><path d="M17 52 32 14 47 52" fill="none" stroke="{CREAM}" stroke-width="8"/><path d="M21 40 43 33" stroke="{CLAY}" stroke-width="6"/>', f"{NAME} favicon"))

# 1200x630 social card (typographic; photography can be composited later)
d, tw = text_path(FR, NAME, 92, 340, 322, -0.01); t, gw = text_path(IS, TAG, 20, 344, 382, 0.3)
card = (f'<rect width="1200" height="630" fill="#f1e8d6"/><g opacity=".55"><path d="M860 -20 1260 380V430L810 -20Z" fill="{SAND}"/><path d="M930 -20 1260 310V350L890 -20Z" fill="{TAUPE}" opacity=".5"/></g>'
        + mark(INK, CREAM, CLAY, 'transform="translate(84 195) scale(3)"') + f'<path d="{d}" fill="{INK}"/><path d="{t}" fill="{TAUPE}"/>')
open("public/brand/social-card.svg", "w").write(svg(1200, 630, card, f"{NAME} social card"))
d, tw = text_path(FR, NAME, 58, 84, 424, -0.01); t2, gw = text_path(IS, TAG, 15, 88, 468, 0.3)
left = (f'<rect width="1200" height="630" fill="#f1e8d6"/>' + mark(INK, CREAM, CLAY, 'transform="translate(84 162) scale(2.1)"')
        + f'<path d="{d}" fill="{INK}"/><path d="{t2}" fill="{TAUPE}"/>')
open("public/brand/social-card-left.svg", "w").write(svg(1200, 630, left, f"{NAME} social card"))
print("brand SVGs written")
