package com.example.celtofarconverter;

import android.app.Application;

import androidx.lifecycle.LiveData;

import java.util.List;

public class TempRepository {
    private StateDAO mStateDao;
    private CelsiusDAO mCelsiusDao;
    private LiveData<List<Celsius>> mAllWords;

    TempRepository(Application application){
        StateTempsTable db = StateTempsTable.getDatabase(application);
        mCelsiusDao = db.celsiusDAO();
        mStateDao = db.stateDAO();
//        mAllWords = mCelsiusDao.getAlphabetizedWords();
    }

    LiveData<List<Celsius>> getAllConversions(){
        return mAllWords;
    }

    void insert(Celsius celsius){
        StateTempsTable.databaseWriteExecutor.execute(() -> {
            mCelsiusDao.insert(celsius);
        });
    }
    void insert(State state){
        StateTempsTable.databaseWriteExecutor.execute(() -> {
            mStateDao.insert(state);
        });
    }

}
