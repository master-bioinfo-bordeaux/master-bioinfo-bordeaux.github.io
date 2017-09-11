#!/bin/bash

if [ "$#" -ne 1 ]
then
  printf "ERROR: Wrong number of arguments\nUSAGE: sh ics2json_m1.sh <path/filename.ics> \n"
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
git pull
printf 'Conversion.....\n'
nodejs tool_ics.js -i $1 > `pwd`/../data/calendar_m1.json
git add ../data/calendar_m1.json
git commit -m 'Update calendar M1'
git push
 
