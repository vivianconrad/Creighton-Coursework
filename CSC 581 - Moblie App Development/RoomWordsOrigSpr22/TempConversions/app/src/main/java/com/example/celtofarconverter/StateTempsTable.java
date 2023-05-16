package com.example.celtofarconverter;

import android.content.Context;

import androidx.annotation.NonNull;
import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;
import androidx.sqlite.db.SupportSQLiteDatabase;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;


@Database(entities = {Celsius.class}, version=1,exportSchema = false)
public abstract class StateTempsTable extends RoomDatabase {

    public abstract CelsiusDAO celsiusDAO();
    public abstract StateDAO stateDAO();
    public abstract FahrenheitDAO fahrenheitDAO();


    private static volatile StateTempsTable INSTANCE;
    private static final int NUMBER_OF_THREADS = 4;
    static final ExecutorService databaseWriteExecutor = Executors.newFixedThreadPool(NUMBER_OF_THREADS);

    static StateTempsTable getDatabase(final Context context){
        if (INSTANCE==null) {
            synchronized (StateTempsTable.class) {
                if (INSTANCE==null){
                    INSTANCE = Room.databaseBuilder(context.getApplicationContext(), StateTempsTable.class,
                            "temp_database").addCallback(sTempDatabaseCallback).build();
                }
            }
        }
        return INSTANCE;
    }

    private static RoomDatabase.Callback sTempDatabaseCallback = new RoomDatabase.Callback(){

        @Override
        public void onOpen(@NonNull SupportSQLiteDatabase db){
            super.onOpen(db);

            databaseWriteExecutor.execute(() -> {
                StateDAO dao = INSTANCE.stateDAO();
                dao.deleteAll();

                State state = new State("Nebraska");
                dao.insert(state);
                state = new State("Colorado");
                dao.insert(state);
                state = new State("Texas");
                dao.insert(state);
                state = new State("California");
                dao.insert(state);
                state = new State("New York");
                dao.insert(state);

                CelsiusDAO dao = INSTANCE.celsiusDAO();
                dao.deleteAll();

                Celsius celsius = new Celsius("9.3");
                dao.insert(celsius);
                celsius = new Celsius("7.3");
                dao.insert(celsius);
                celsius = new Celsius("18.2");
                dao.insert(celsius);
                celsius = new Celsius("15.2");
                dao.insert(celsius);
                celsius = new Celsius("7.4");
                dao.insert(celsius);

                FahrenheitDAO dao = INSTANCE.fahrenheitDAO();
                dao.deleteAll();

                Fahrenheit fahrenheit = new Fahrenheit("48.8");
                dao.insert(fahrenheit);
                fahrenheit = new Fahrenheit("45.1");
                dao.insert(fahrenheit);
                fahrenheit = new Fahrenheit("64.8");
                dao.insert(fahrenheit);
                fahrenheit = new Fahrenheit("59.4");
                dao.insert(fahrenheit);
                fahrenheit = new Fahrenheit("45.4");
                dao.insert(fahrenheit);
            });
        }
    };
}
