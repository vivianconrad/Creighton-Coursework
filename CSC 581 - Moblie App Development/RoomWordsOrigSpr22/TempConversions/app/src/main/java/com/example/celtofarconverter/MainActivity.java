package com.example.celtofarconverter;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.util.List;

public class MainActivity extends AppCompatActivity {

    private StateViewModel mStateViewModel;
    public static final int NEW_STATETEMP_ACTIVITY_REQUEST_CODE = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        RecyclerView recyclerView = findViewById(R.id.recyclerview);
        final StateListAdapter adapter = new StateListAdapter(this);
        recyclerView.setAdapter(adapter);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        mStateViewModel = new ViewModelProvider(this).get(StateViewModel.class);
        mStateViewModel.getAllConversions().observe(this, new Observer<List<Celsius>>() {
            @Override
            public void onChanged(@Nullable final List<Celsius> celsiuses) {
                adapter.setTemp(celsiuses);
            }
        });
        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view){
                Intent intent = new Intent(MainActivity.this, NewStateTempActivity.class);
                startActivityForResult(intent, NEW_STATETEMP_ACTIVITY_REQUEST_CODE);
            }
        });
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data){
        super.onActivityResult(requestCode, resultCode, data);

        if(requestCode== NEW_STATETEMP_ACTIVITY_REQUEST_CODE && resultCode==RESULT_OK) {
            Celsius celsius = new Celsius(data.getStringExtra(NewStateTempActivity.EXTRA_REPLY));
            mStateViewModel.insert(celsius);
            State state = new State(data.getStringExtra(NewStateTempActivity.EXTRA_REPLY));
            mStateViewModel.insert(state);
        } else {
            Toast.makeText(getApplicationContext(),R.string.empty_not_saved,Toast.LENGTH_LONG).show();
        }
    }
}