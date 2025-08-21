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

# Semester 7
printf "Semester 7: ANGLAIS,APU,BSTATS,IMAJS,OBI\n"
printf "==============================================\n"
curl -L https://calendar.google.com/calendar/ical/afknoo88ub36mtigskd7onm8ek%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S7_ANGLAIS.ics
curl -L https://calendar.google.com/calendar/ical/dalb6rcjq1l5uonp99ipsbefb0%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S7_APU.ics
curl -L https://calendar.google.com/calendar/ical/hnt79pepoc3a9omjvmlkmdrl88%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S7_BSTATS.ics
curl -L https://calendar.google.com/calendar/ical/3h2brkfagdb5lmo0bc60h9qaqs%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S7_IMAJS.ics
curl -L https://calendar.google.com/calendar/ical/jg2ut49067j7rus68c76tgspl0%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S7_OBI.ics
curl -L https://calendar.google.com/calendar/ical/a8e4f2cde92ad276646d3396c2f484c653e781d15d3638e63377d734dafb76ad%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S7_PYTHON.ics

# Semester 8
printf "Semester 8\n"
printf "==============================================\n"
curl -L https://calendar.google.com/calendar/ical/2pg06m2oe4nshusb294ftpjo9s%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_ALGOPRG2.ics
curl -L https://calendar.google.com/calendar/ical/gj4b6s72vaimkf9eajjcnolabg%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_BBP.ics
curl -L https://calendar.google.com/calendar/ical/bf3ejtmu8f3da58u5l5jbrd0kg%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_BDD.ics
curl -L https://calendar.google.com/calendar/ical/7c4sd4ssq3epfb55ghuv7qnqqs%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_BIODIV.ics
curl -L https://calendar.google.com/calendar/ical/np2j4gfmuo312d7icgv0vlpebc%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_CPRD.ics
curl -L https://calendar.google.com/calendar/ical/6v268abbjemtcvqlo1ob4rb7f8%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_ECOAQUA.ics
curl -L https://calendar.google.com/calendar/ical/sfs6ajp1ricdcgh9h4plvnv2vk%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_ECOTERR.ics
curl -L https://calendar.google.com/calendar/ical/21jtg3m4afkpok2v5ba5okhucs%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_GENEPI.ics
curl -L https://calendar.google.com/calendar/ical/pjmnuq9oam9nnsfabds17buu00%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_NGS.ics
curl -L https://calendar.google.com/calendar/ical/s7n0fpslbb7cfo0af7oh6812qk%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_POO2.ics
curl -L https://calendar.google.com/calendar/ical/3e0o55fc11p2pp4lcob720ng3c%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_WEBMOD.ics
curl -L https://calendar.google.com/calendar/ical/3862fadb1a28ab4764c5a89b55cdf1f0cd1367b8b0341f31dfe1589297c9db71%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_BIP.ics
# Master
printf "Master Events: VACANCES\n"
curl -L https://calendar.google.com/calendar/ical/3tcafir28thutbb6kfvlabas1k%40group.calendar.google.com/public/basic.ics  | awk -f clean.awk > ../data/MS_VACANCES.ics
printf "Master Events: EVENTS\n"
curl -L https://calendar.google.com/calendar/ical/5t82iihrvh2tg5h32k9vecp0lo%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/MS_EVENTS.ics



while true; do
    read -p "Push this calendar to github [y|n] ?" yn
    case $yn in
        [Yy]* ) printf 'Step #4: Commit/push M1 .....\n';git add ../data/S7_*.ics;git add ../data/S8_*.ics;git add ../data/MS_VACANCES.ics;git add ../data/MS_EVENTS.ics;git commit -m 'Update S7, S8, Vacances and Events';git push;git push; break;;
        [Nn]* ) printf 'Update stopped.....\n';exit;;
        * ) echo "Please answer yes or no.";;
    esac
done


#End
printf 'Step #5: End of update.....\n'


