package com.example.celtofarconverter;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity(tableName = "fahrenheit_table")

public class Fahrenheit {

    @PrimaryKey
    @NonNull
    @ColumnInfo(name="Fahrenheit")
    private String mFahrenheit;

    public Fahrenheit(@NonNull String fahrenheit){
        this.mFahrenheit = fahrenheit;
    }

    public String getFahrenheit(){
        return this.mFahrenheit;
    }

}
