package com.example.celtofarconverter;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

/**
 * Entity class for storing Fahrenheit temperature values in the database.
 */
@Entity(tableName = "fahrenheit_table")
public class Fahrenheit {

    @PrimaryKey
    @NonNull
    @ColumnInfo(name = "fahrenheit_value")
    private String fahrenheitValue;

    /**
     * Constructor to create a Fahrenheit object.
     *
     * @param fahrenheitValue The Fahrenheit temperature value.
     */
    public Fahrenheit(@NonNull String fahrenheitValue) {
        this.fahrenheitValue = fahrenheitValue;
    }

    /**
     * Get the Fahrenheit temperature value.
     *
     * @return The Fahrenheit temperature value.
     */
    public String getFahrenheitValue() {
        return fahrenheitValue;
    }
}
