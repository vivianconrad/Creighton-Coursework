package com.example.centtofahrappproof;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class DisplayMessageActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_display_message);

        //Get the Intent that started this activity and extract the string
        Intent intent = getIntent();
        String message = intent.getStringExtra(MainActivity.EXTRA_MESSAGE);

        //Capture the layout's TextView and set the string as its text
        TextView textView = findViewById(R.id.textView);
        String messageString = "";
        try {
            Double newVal = Double.parseDouble(message);
            newVal = (newVal * 9/5.0) + 32.0;
            String sVal = Double.toString(newVal);
            messageString = "The Celsius value "+message+" is "+sVal+" Fahrenheit";
        }
        catch (NumberFormatException e){
            messageString = "Cannot convert that value.  Must be like 31.65";
        }
        textView.setText(messageString);
    }
}