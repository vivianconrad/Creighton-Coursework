package com.example.celtofarconverter;

import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;

import java.util.List;

@Dao
public interface CelsiusDAO {
    // allowing the insertion of the same celsius multiple times by passing a
    // conflict resolution strategy
    @Insert(onConflict= OnConflictStrategy.IGNORE)
    void insert(Celsius celsius);

    @Query("DELETE FROM Celsius")
    void deleteAll();

    @Query("SELECT * from Celsius ORDER BY state ASC")
    LiveData<List<Celsius>> getAlphabetizedWords();
}
