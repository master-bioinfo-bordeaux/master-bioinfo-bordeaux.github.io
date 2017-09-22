#!/bin/bash

if [ "$#" -ne 1 ]
then
  printf "ERROR: Wrong number of arguments\nUSAGE: sh ics2json_m2.sh <path> \n"
  exit
fi

#
#  calendarmgr: Calendar for the Master of Sciences in BioInformatics, Bordeaux, France Web Site
#  Copyright (C) 2015-2017  Jean-Christophe Taveau.
#
#  This file is part of calendarmgr
#
# This program is free software: you can redistribute it and/or modify it 
# under the terms of the GNU General Public License as published by 
# the Free Software Foundation, either version 2 of the License, or 
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful, 
# but WITHOUT ANY WARRANTY; without even the implied warranty of 
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
# GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with calendarmgr.  If not, see <http://www.gnu.org/licenses/>.
#
#
# Authors:
# Jean-Christophe Taveau
#

cd `pwd`
printf 'Step #1: Git Pull.....\n'
git pull

printf 'Step #2: Conversion.....\n'
rm -f `pwd`/../data/calendar_m2.json
touch `pwd`/../data/calendar_m2.json
cat $1*.ics > merged_tmp.ics

calendar=`pwd`/../data/calendar_m2.json
node tool_ics.js -i merged_tmp.ics > `pwd`/../data/calendar_m2.json

if grep -q ERROR "$calendar"; then
   printf '>>> ERROR: Check the content of calendar_m2.json\n>>> '
   grep ERROR "$calendar"
   printf '>>> END of process...\n'
   exit
fi

while true; do
    read -p "Push this calendar to github [y|n] ?" yn
    case $yn in
        [Yy]* ) printf 'Step #3: Commit/push calendar_m2.json .....\n';git add ../data/calendar_m2.json;git commit -m 'Update calendar M2';git push; break;;
        [Nn]* ) printf 'Update stopped.....\n';exit;;
        * ) echo "Please answer yes or no.";;
    esac
done


 
# Cleanup
printf 'Step #4: Cleanup.....\n'
rm merged_tmp.ics

#End
printf 'Step #5: End of update.....\n'



