package com.example.celtofarconverter;

import android.app.Application;

import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import java.util.List;

public class StateViewModel extends AndroidViewModel {
    private TempRepository mRepository;
    private LiveData<List<Celsius>> mAllStates;

    public StateViewModel(Application application){
        super(application);
        mRepository = new TempRepository(application);
        mAllStates = mRepository.getAllConversions();
    }

    LiveData<List<Celsius>> getAllConversions(){
        return mAllStates;
    }

    public void insert(Celsius celsius){
        mRepository.insert(celsius);
    }
}
