# wikia-vector
Adds Vector skin support to Wikia. Requires Greasemonkey. 

Contains code from Wikipedia stylesheets, which are licensed under CC BY-SA and GFDL. (See en.wikipedia.org/wiki/WP:C for more info).

This is in ALPHA, by which I mean it is in a barely usable state, so I recommend not using this until a more stable version is available... or at least I would recommend it if it wasn’t for Oasis making class-A Wikimedia fails like Flow or MediaViewer look good (and believe me, that’s very hard to do).

## How to set up
1. Get Greasemonkey if you’re using Firefox, or the equivalent for your browser. Greasemonkey can be found at: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
2. Get uBlock Origin or another adblocker. The code does not block ads, and ads will probably mess up the layout, so pick up uBlock Origin at: https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
3. Create a new userscript and copy-paste the contents of "wikia-vector.user.js" into the edit window.
4. Add the following URLs to the `User Includes` section of `User Script Options` and make sure to tick the `Only use these` box.
`https://*.wikia.com/*`
`https://*.fandom.com/*`
5. Add the following URLs to the `User Excludes` section of `User Script Options` (no box to tick this time):
`https://www.wikia.com/*`
`https://www.fandom.com/*`
6. You’re all set to enjoy Wikia the way it was meant to be enjoyed! Unless you’re reading Uncyclopedia, in which case... I should stop writing this so I don’t get banned from Wikia. I’m skating on thin ice as it is.

Stay tuned for my sister project, Wikia MonoBook.
