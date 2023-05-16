package com.example.celtofarconverter;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity(tableName = "state_table")

public class State {

    @PrimaryKey
    @NonNull
    @ColumnInfo(name="State")
    private String mState;

    public State(@NonNull String state){
        this.mState = state;
    }

    public String getState(){
        return this.mState;
    }

}
