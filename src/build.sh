#!/bin/bash

cat ./courses.js  ./tableCal.js ./calendar.js ./news.js > ../js/msbifub.js
cat ./courses.js  ./tableCal.js ./calmgr.js ./parseICS.js ./calendar.js ./news.js > ../js/msbifub2.js

sed -E 's/console.log\((.*)\);?//g' ../js/msbifub.js > ../js/msbifub.min.js
sed -E 's/console.log\((.*)\);?//g' ../js/msbifub2.js > ../js/msbifub2.min.js
