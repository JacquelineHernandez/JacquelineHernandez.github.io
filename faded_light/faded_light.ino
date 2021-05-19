int led = 3;           // the pin that the LED is attached to
int brightness = 0;    // how bright the LED is
int fadeAmount = 3;    // how many points to fade the LED by

// the setup routine runs once when you press reset:
void setup()  { 
  pinMode(led, OUTPUT);
} 

void loop()  { 
  analogWrite(led, brightness);    //brightness 

  // change the brightness for next time through the loop:
  brightness = brightness + fadeAmount;

  // reverse the direction of the fading at the ends of the fade: 
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ; 
  }      
  delay(30);     // wait the 30 seconds.                        
}
