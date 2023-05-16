package com.example.celtofarconverter;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity(tableName = "celsius_table")

public class Celsius {

    @PrimaryKey
    @NonNull
    @ColumnInfo(name="Celsius")
    private String mCelsius;

    public Celsius(@NonNull String celsius){
        this.mCelsius = celsius;
    }

    public String getCelsius(){
        return this.mCelsius;
    }

}
