package com.example.celtofarconverter;

import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;

import java.util.List;

@Dao
public interface StateDAO {
    // allowing the insertion of the same celsius multiple times by passing a
    // conflict resolution strategy
    @Insert(onConflict= OnConflictStrategy.IGNORE)
    void insert(State state);

    @Query("DELETE FROM State")
    void deleteAll();

    @Query("SELECT * from State ORDER BY state ASC")
    LiveData<List<State>> getAlphabetizedWords();
}
