package com.example.celtofarconverter;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class NewStateTempActivity extends AppCompatActivity {

    public static final String EXTRA_REPLY = "com.example.android.celsiuslistsql.REPLY";
    private EditText mEditStateView;
    private EditText mEditTempView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_new_statetemp);
        mEditStateView = findViewById(R.id.add_new_state);
        mEditTempView = findViewById(R.id.add_new_ce_temp);

        final Button button = findViewById(R.id.button_save);
        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View view) {
                Intent replyIntent = new Intent();
                if (TextUtils.isEmpty(mEditStateView.getText())) {
                    setResult(RESULT_CANCELED, replyIntent);
                } else {
                    String state = mEditStateView.getText().toString();
                    replyIntent.putExtra(EXTRA_REPLY, state);
                    setResult(RESULT_OK, replyIntent);
                }
                if (TextUtils.isEmpty(mEditTempView.getText())) {
                    setResult(RESULT_CANCELED, replyIntent);
                } else {
                    String celsius = mEditTempView.getText().toString();
                    replyIntent.putExtra(EXTRA_REPLY, celsius);
                    setResult(RESULT_OK, replyIntent);
                }
                finish();
            }
        });
    }
}