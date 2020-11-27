const urllib=require("urllib")
opener = urllib.request.FancyURLopener({})
url = "http://google.com/"
f = opener.open(url)
content = f.read()