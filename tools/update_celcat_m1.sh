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

read -p $'\e[0m\e[31mS7 CELCAT calendar filename\e[0m [4TBC701.ics]:' s7_ics
if [ -z "${s7_ics}" ]
then
    s7_ics='../data/4TBC701.ics'
else
    s7_ics='../data/'${s7_ics}
fi

printf 'Step #2: Prepare ics calendar %s for website....\n' $s7_ics

# Convert CELCAT ics into GoogleAgenda ics
cat ${s7_ics} | tr -d '\r' | awk -f clean_merge_celcat.awk > tmp.ics

# Semester 7
printf "Semester 7: ANGLAIS,APU,BSTATS,IMAJS,OBI\n"
printf "==============================================\n"
grep SUMMARY:4TBI704U -B 3 -A 5 tmp.ics  | awk -v acronym=ANGLAIS -f clean_celcat.awk  > ../data/S7_ANGLAIS.ics
grep SUMMARY:4TBI702U -B 3 -A 5 tmp.ics  | awk -v acronym=APU -f clean_celcat.awk  > ../data/S7_APU.ics
grep SUMMARY:4TBI705U -B 3 -A 5 tmp.ics  | awk -v acronym=BSTATS -f clean_celcat.awk  > ../data/S7_BSTATS.ics
grep SUMMARY:4TBI701U -B 3 -A 5 tmp.ics  | awk -v acronym=IMAJS -f clean_celcat.awk  > ../data/S7_IMAJS.ics
grep SUMMARY:4TBI703U -B 3 -A 5 tmp.ics  | awk -v acronym=OBI   -f clean_celcat.awk  > ../data/S7_OBI.ics
  

# Semester 8
#printf "Semester 8\n"
#printf "==============================================\n"
##curl -L https://calendar.google.com/calendar/ical/2pg06m2oe4nshusb294ftpjo9s%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_ALGOPRG2.ics
##curl -L https://calendar.google.com/calendar/ical/gj4b6s72vaimkf9eajjcnolabg%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_BBP.ics
##curl -L https://calendar.google.com/calendar/ical/bf3ejtmu8f3da58u5l5jbrd0kg%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_BDD.ics
##curl -L https://calendar.google.com/calendar/ical/7c4sd4ssq3epfb55ghuv7qnqqs%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_BIODIV.ics
##curl -L https://calendar.google.com/calendar/ical/np2j4gfmuo312d7icgv0vlpebc%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_CPRD.ics
##curl -L https://calendar.google.com/calendar/ical/6v268abbjemtcvqlo1ob4rb7f8%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_ECOAQUA.ics
##curl -L https://calendar.google.com/calendar/ical/sfs6ajp1ricdcgh9h4plvnv2vk%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_ECOTERR.ics
##curl -L https://calendar.google.com/calendar/ical/21jtg3m4afkpok2v5ba5okhucs%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_GENEPI.ics
##curl -L https://calendar.google.com/calendar/ical/pjmnuq9oam9nnsfabds17buu00%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_NGS.ics
##curl -L https://calendar.google.com/calendar/ical/s7n0fpslbb7cfo0af7oh6812qk%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_POO2.ics
##curl -L https://calendar.google.com/calendar/ical/3e0o55fc11p2pp4lcob720ng3c%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S8_WEBMOD.ics

# Master
#printf "Master Events: VACANCES\n"
#curl -L https://calendar.google.com/calendar/ical/3tcafir28thutbb6kfvlabas1k%40group.calendar.google.com/public/basic.ics  | awk -f clean.awk > ../data/MS_VACANCES.ics
#printf "Master Events: EVENTS\n"
#curl -L https://calendar.google.com/calendar/ical/5t82iihrvh2tg5h32k9vecp0lo%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/MS_EVENTS.ics


# Push
#while true; do
#    read -p "Push this calendar to github [y|n] ?" yn
#    case $yn in
#        [Yy]* ) printf 'Step #4: Commit/push M1 .....\n';git add ../data/S7_*.ics;git add ../data/S8_*.ics;git add ../data/MS_VACANCES.ics;git add ../data/MS_EVENTS.ics;git commit -m 'Update S7, S8, Vacances and Events';git push;git push; break;;
#        [Nn]* ) printf 'Update stopped.....\n';exit;;
#        * ) echo "Please answer yes or no.";;
#    esac
#done


#End
printf 'Step #5: End of update.....\n'


