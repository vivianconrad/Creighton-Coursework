package com.example.celtofarconverter;

import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;

import java.util.List;

@Dao
public interface FahrenheitDAO {
    public static float celtofarconverter(float fahernheit) {
        fahernheit = ((celsius* 9) / 5) + 32;
        return fahernheit;
    }

    @Insert(onConflict= OnConflictStrategy.IGNORE)
    void insert(Fahrenheit fahrenheit);

    @Query("DELETE FROM Fahrenheit")
    void deleteAll();

    @Query("SELECT * from Fahrenheit ORDER BY state ASC")
    LiveData<List<State>> getAlphabetizedWords();
}
