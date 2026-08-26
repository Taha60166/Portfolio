Put your images in this folder.

--------------------------------------------------------------------
1. Certificate images
--------------------------------------------------------------------

  cert-01.jpg    Game Design and Development 1: 2D Shooter
  cert-02.jpg    Game Design and Development 2: 2D Platformer
  cert-03.jpg    Game Design and Development 3: 3D Shooter
  cert-04.jpg    Game Design and Development 4: 3D Platformer

Then set the `image` field for that certificate in ../js/content.js:

  image: "assets/img/cert-01.jpg"

To get a clean image: open the certificate on Coursera, use its download
or print-to-PDF option, then export the PDF page as JPG at around 1600px
wide. A screenshot works too — just crop the browser chrome off.

--------------------------------------------------------------------
2. Project posters (the still shown before hover)
--------------------------------------------------------------------

  project-01.jpg ... project-07.jpg

Set the `poster` field in ../js/content.js:

  poster: "assets/img/project-01.jpg"

Grab the best-looking frame from your gameplay video. 1280px wide is plenty.
With ffmpeg, this pulls the frame at 47 seconds:

  ffmpeg -ss 47 -i ../video/raw-capture.mp4 -frames:v 1 \
    -vf "scale=1280:-2" -q:v 3 project-01.jpg

Pick a frame with the player character clearly visible and something
happening. Avoid menu screens here — the poster is the card's first
impression. Menus are better used as gallery screenshots below.

Note: the cards are 16:9 and crop about 5% off the top and bottom of a
16:10 image, so keep anything important away from those edges.

--------------------------------------------------------------------
3. Project screenshots (shown in the project modal gallery)
--------------------------------------------------------------------

  project-01-shot-a.jpg
  project-01-shot-b.jpg
  project-01-shot-c.jpg
  project-01-shot-d.jpg

Add them to the `screenshots` array in ../js/content.js:

  screenshots: [
    "assets/img/project-01-shot-a.jpg",
    "assets/img/project-01-shot-b.jpg"
  ]

You can add as many as you like — the gallery grid reflows automatically.

These tiles are 16:10, which is the shape most Unity captures already are,
so they generally show your frame with no cropping at all. Good things to
include: the main menu, a wide shot of a level, a moment that shows off a
mechanic, and anything that demonstrates UI you built.

--------------------------------------------------------------------
4. Social preview image (optional, for when you share the link)
--------------------------------------------------------------------

  og-cover.jpg   1200x630

Once this exists and the site is hosted, uncomment the Open Graph block
near the top of ../../index.html and put your real domain in it.

--------------------------------------------------------------------

Every image above is optional. Anything missing is replaced by a
generated placeholder, so the site always looks complete.
