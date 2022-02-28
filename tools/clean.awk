BEGIN {
  FS="END:VEVENT";
  RS="BEGIN:VEVENT";
  
  # Date
  year=strftime("%Y");
  
  print date
  # Header
  print "BEGIN:VCALENDAR"
  print "PRODID:-//Google Inc//Google Calendar 70.9054//EN"
  print "VERSION:2.0"
  print "CALSCALE:GREGORIAN"
  print "METHOD:PUBLISH"
  print "X-WR-CALNAME:WEBMOD"
  print "X-WR-TIMEZONE:Europe/Paris"

}
{
  # Remove leading space.s
  gsub(/^[[:space:]]*/,"",$0);
  # Remove ending space.s
  gsub(/[[:space:]]*$/,"",$0);
  split($1,words,":");
  # print substr(words[1],0,7),substr(words[2],1,4);
  if ( words[1] ~ /DTSTART/ && substr(words[2],1,4) == year) {
    print "BEGIN:VEVENT";
    print $0;
  }
}
END {
  # Footer
  print "END:VCALENDAR"
}
