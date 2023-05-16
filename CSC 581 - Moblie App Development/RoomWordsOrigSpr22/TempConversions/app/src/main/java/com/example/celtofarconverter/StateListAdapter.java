package com.example.celtofarconverter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class StateListAdapter extends RecyclerView.Adapter<StateListAdapter.StateViewHolder> {
    class StateViewHolder extends RecyclerView.ViewHolder{
        private final TextView StateItemView;

        private StateViewHolder(View itemView){
            super(itemView);
            StateItemView = itemView.findViewById(R.id.textView);
        }
    }

    private final LayoutInflater mInflater;
    private List<Celsius> mCelsiuses;

    StateListAdapter(Context context){
        mInflater = LayoutInflater.from(context);
    }
    
    @NonNull
    @Override
    public StateViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = mInflater.inflate(R.layout.recyclerview_item, parent, false);
        return new StateViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(StateViewHolder holder, int position){
        if (mCelsiuses != null) {
            Celsius current = mCelsiuses.get(position);
            holder.StateItemView.setText(current.getCelsius());
        } else {
            holder.StateItemView.setText("No temp");
        }
    }

    void setTemp(List<Celsius> celsiuses){
        mCelsiuses = celsiuses;
        notifyDataSetChanged();
    }

    @Override
    public int getItemCount(){
        if (mCelsiuses !=null)
            return mCelsiuses.size();
        else
            return 0;
    }
}
