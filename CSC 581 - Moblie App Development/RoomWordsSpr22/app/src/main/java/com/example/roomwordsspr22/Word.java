package com.example.roomwordsspr22;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity(tableName = "word_table")

public class Word {

    @PrimaryKey
    @NonNull
    @ColumnInfo(name="word")
    private String mWord;

    @NonNull
    @ColumnInfo(name="pos")
    private String mPOS;

    public Word(@NonNull String word){
        this.mWord = word;
        this.mPOS = "none";
    }

    public Word(@NonNull String word, @NonNull String pos){
        this.mWord = word;
        this.mPOS = pos;
    }

    public void setWord(String word){
        mWord = word;
    }

    public String getWord(){
        return this.mWord;
    }

    public String getPOS(){
        return this.mPOS;
    }

    public void setPOS(String pos){
        mPOS = pos;
    }

}
