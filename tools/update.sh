#!/bin/bash

# Semester 7
printf "Semester 7: ANGLAIS,APU,BSTATS,IMAJS,OBI\n"
printf "==============================================\n"
curl -L https://calendar.google.com/calendar/ical/afknoo88ub36mtigskd7onm8ek%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S7_ANGLAIS.ics
curl -L https://calendar.google.com/calendar/ical/dalb6rcjq1l5uonp99ipsbefb0%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S7_APU.ics
curl -L https://calendar.google.com/calendar/ical/hnt79pepoc3a9omjvmlkmdrl88%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S7_BSTATS.ics
curl -L https://calendar.google.com/calendar/ical/3h2brkfagdb5lmo0bc60h9qaqs%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S7_IMAJS.ics
curl -L https://calendar.google.com/calendar/ical/jg2ut49067j7rus68c76tgspl0%40group.calendar.google.com/public/basic.ics | awk -f clean.awk > ../data/S7_OBI.ics
  

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

# Master
printf "Master Events: VACANCES\n"
curl -L https://calendar.google.com/calendar/ical/3tcafir28thutbb6kfvlabas1k%40group.calendar.google.com/public/basic.ics  | awk -f clean.awk > ../data/MS_VACANCES.ics

# Git 
git pull
git add ../data/S7_*.ics
git add ../data/S8_*.ics
git add ../data/S9_*.ics
git add ../data/S10_*.ics
git add ../data/MS_VACANCES.ics
git commit -m 'Update S8,S9,S9,S10 Events'
git push


