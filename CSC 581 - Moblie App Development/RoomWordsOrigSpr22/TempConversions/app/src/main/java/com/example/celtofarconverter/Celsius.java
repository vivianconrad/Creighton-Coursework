package com.example.celtofarconverter;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

/**
 * Entity class for storing Celsius temperature values in the database.
 */
@Entity(tableName = "celsius_table")
public class Celsius {

    @PrimaryKey
    @NonNull
    @ColumnInfo(name = "celsius_value")
    private String celsiusValue;

    /**
     * Constructor to create a Celsius object.
     *
     * @param celsiusValue The Celsius temperature value.
     */
    public Celsius(@NonNull String celsiusValue) {
        this.celsiusValue = celsiusValue;
    }

    /**
     * Get the Celsius temperature value.
     *
     * @return The Celsius temperature value.
     */
    public String getCelsiusValue() {
        return celsiusValue;
    }
}
