#!/bin/bash

if [ "$#" -ne 1 ]
then
  printf "ERROR: Wrong number of arguments\nUSAGE: sh update_m1.sh <folder_path_where/ics_are_located/> \n"
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
printf 'Step #2: Cleanup old calendar_m1.json.....\n'
rm -f `pwd`/../data/calendar_m1.json

printf 'Step #3: Conversion.....\n'
calendar=`pwd`/../data/calendar_m1.json
nodejs tool_ics.js -d $1 -o `pwd`/../data/calendar_m1.json

if grep -q ERROR "$calendar"; then
   printf '>>> ERROR: Check the content of $calendar\n>>> '
   grep ERROR "$calendar"
   printf '>>> END of process...\n'
   exit
fi

while true; do
    read -p "Push this calendar to github [y|n] ?" yn
    case $yn in
        [Yy]* ) printf 'Step #4: Commit/push calendar_m1.json .....\n';git add ../data/calendar_m1.json;git commit -m 'Update calendar M1';git push; break;;
        [Nn]* ) printf 'Update stopped.....\n';exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

#End
printf 'Step #5: End of update.....\n'

git add ../data/calendar_m1.json
git commit -m 'Update calendar M1'
git push
 
