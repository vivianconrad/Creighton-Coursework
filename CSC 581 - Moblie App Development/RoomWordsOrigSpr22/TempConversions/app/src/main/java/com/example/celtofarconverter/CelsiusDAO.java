package com.example.celtofarconverter;

import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;

import java.util.List;

/**
 * Data Access Object (DAO) for Celsius temperature values.
 */
@Dao
public interface CelsiusDAO {

    /**
     * Insert a Celsius temperature value into the database.
     *
     * @param celsius The Celsius object to insert.
     */
    @Insert(onConflict = OnConflictStrategy.IGNORE)
    void insert(Celsius celsius);

    /**
     * Delete all Celsius temperature values from the database.
     */
    @Query("DELETE FROM Celsius")
    void deleteAll();

    /**
     * Retrieve all Celsius temperature values from the database in alphabetical order.
     *
     * @return A LiveData list of Celsius temperature values.
     */
    @Query("SELECT * FROM Celsius ORDER BY celsius_value ASC")
    LiveData<List<Celsius>> getAlphabetizedCelsiusValues();
}
