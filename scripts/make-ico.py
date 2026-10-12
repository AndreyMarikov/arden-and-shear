from PIL import Image; import os
p = "public/brand/favicon-256.tmp.png"
Image.open(p).save("public/brand/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)]); os.remove(p); print("favicon.ico written")
