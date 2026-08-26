Put your gameplay capture videos in this folder.

--------------------------------------------------------------------
Two files per project, not one
--------------------------------------------------------------------

Each project uses TWO videos, because the card and the pop-up have
completely different jobs:

  project-01-preview.mp4   short, silent, small  -> plays on card hover
  project-01-full.mp4      whole clip, sound     -> plays inside the pop-up

The preview has to be small, because the browser starts downloading it the
moment someone hovers a card. Aim for 10-15 seconds and under 2 MB. The full
version only downloads when someone actually clicks a project, so it can be
as long and as detailed as you like.

Keep your original untouched camera-quality capture somewhere too. You do not
need to store it in this folder for the site to work.

In ../js/content.js those map to:

  video:     "assets/video/project-01-preview.mp4"
  videoFull: "assets/video/project-01-full.mp4"

If you only have one file, just set `video` and leave `videoFull` out. The
pop-up will fall back to the preview clip.

--------------------------------------------------------------------
Making the two files with ffmpeg
--------------------------------------------------------------------

These are the exact commands used to build project 01 from a 77 MB,
64-second, 1728x1080 raw capture. Change the input name and the numbers.

PREVIEW — 14 seconds starting at 0:34, silent, 960 wide (came out 1.9 MB):

  ffmpeg -ss 34 -t 14 -i raw-capture.mp4 \
    -c:v libx264 -profile:v main -crf 30 -preset veryfast \
    -vf "scale=960:-2,fps=24" -an \
    -movflags +faststart -pix_fmt yuv420p \
    project-01-preview.mp4

Pick the -ss start time by finding the most interesting 14 seconds in your
footage. That clip is your shop window.

FULL — whole thing, with audio, 1152 wide (came out 15 MB):

  ffmpeg -i raw-capture.mp4 \
    -c:v libx264 -profile:v main -crf 28 -preset veryfast \
    -vf "scale=1152:-2" -c:a aac -b:a 96k \
    -movflags +faststart -pix_fmt yuv420p \
    project-01-full.mp4

POSTER — a still frame for the card, taken at 0:47:

  ffmpeg -ss 47 -i raw-capture.mp4 -frames:v 1 \
    -vf "scale=1280:-2" -q:v 3 ../img/project-01.jpg

--------------------------------------------------------------------
What the settings mean
--------------------------------------------------------------------

Format      MP4 (H.264 / AVC). Plays everywhere.
-crf        Quality. Lower = better = bigger. 28-30 is right for web.
-preset     Encoding speed. veryfast is fine; slow is smaller but takes ages.
-an         Strips audio. Hover previews are muted by the page regardless, so
            the audio track would be pure wasted download.
+faststart  Puts the index at the front of the file so it starts playing
            before it has finished downloading. Do not skip this one.
-pix_fmt    yuv420p. Some capture tools output a format Safari won't touch.

--------------------------------------------------------------------
A note on shape
--------------------------------------------------------------------

Unity captures are often 16:10 (1728x1080, 1920x1200) rather than 16:9.
The project cards are 16:9 and will crop about 5% off the top and bottom of
a 16:10 clip. That normally costs you nothing but sky and floor.

The one thing to watch is your in-game HUD. If you have score, health or
buttons very close to the top or bottom edge, they can get clipped on the
card. The pop-up player never crops, so nothing is lost there.

--------------------------------------------------------------------

Until you add a video, the card shows a generated placeholder and reads
"Video coming" instead of "Hover to preview". Nothing breaks.
