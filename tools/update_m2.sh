#!/bin/bash


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

printf 'Step #2: Download ics calendars....\n'

# Semester 9
printf "Semester 9\n"
printf "==============================================\n"
curl -L https://calendar.google.com/calendar/ical/a1jprekcfqqua7d6jggj76r97g%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_DEA.ics
curl -L https://calendar.google.com/calendar/ical/iln5kv5bg6lc2mgpdq7mbs91ik%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_EVOCOMM.ics
curl -L https://calendar.google.com/calendar/ical/96i5olk6mtaag0mopqcbidt7m8%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_FILBI.ics
curl -L https://calendar.google.com/calendar/ical/b5u47go1aqie1n3srams6odcs4%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_GLOG.ics
curl -L https://calendar.google.com/calendar/ical/il0l3f04sp5pkrhk4v7771p8rs%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_IA.ics
curl -L https://calendar.google.com/calendar/ical/s2snibsmoj3j1l60gnibubqolg%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_IRD.ics
curl -L https://calendar.google.com/calendar/ical/f42rotc35cslvfvf3au4rhv400%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_MOCELL.ics
curl -L https://calendar.google.com/calendar/ical/3huo038tah0nog4jes8rucinq8%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_PDR.ics
curl -L https://calendar.google.com/calendar/ical/61v3in5jn2igb9i44kkqtumo38%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_POO.ics
curl -L https://calendar.google.com/calendar/ical/6d1ovd6bc1goatkrtubtubi4j4%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_QPG.ics
curl -L https://calendar.google.com/calendar/ical/ile7trh2850uul109j8eas2lq4%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_SIG.ics
curl -L https://calendar.google.com/calendar/ical/qqmpct1km5g4ou29qpuj9lvjng%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_STRUBIGL.ics
curl -L https://calendar.google.com/calendar/ical/u80fp1govpan1j6gvaam9rftlc%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S9_TDE2.ics

# Semester 10
printf "Semester 10\n"
printf "==============================================\n"
curl -L https://calendar.google.com/calendar/ical/ack5mbjjlpf3f4iu2cfgd2u36c%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S10_STAGE.ics



while true; do
    read -p "Push this calendar to github [y|n] ?" yn
    case $yn in
        [Yy]* ) printf 'Step #4: Commit/push M1 .....\n';git add ../data/S9_*.ics;git add ../data/MS_VACANCES.ics;git commit -m 'Update S9, S10, Vacances and Events';git push;git push; break;;
        [Nn]* ) printf 'Update stopped.....\n';exit;;
        * ) echo "Please answer yes or no.";;
    esac
done


#End
printf 'Step #5: End of update.....\n'





