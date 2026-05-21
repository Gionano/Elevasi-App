package com.example.elevasi.data

import android.content.Context
import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.core.booleanPreferencesKey
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.stringPreferencesKey
import androidx.datastore.preferences.preferencesDataStore
import com.example.elevasi.data.model.ThemeSelection
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map

val Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = "elevasi_preferences")

class ThemePreferencesManager(private val context: Context) {

    companion object {
        private val THEME_KEY = stringPreferencesKey("theme_preference")
        private val TUTORIAL_COMPLETED_KEY = booleanPreferencesKey("tutorial_completed")

        @Volatile
        private var INSTANCE: ThemePreferencesManager? = null

        fun getInstance(context: Context): ThemePreferencesManager {
            return INSTANCE ?: synchronized(this) {
                val instance = ThemePreferencesManager(context.applicationContext)
                INSTANCE = instance
                instance
            }
        }
    }

    val themeSelectionFlow: Flow<ThemeSelection> = context.dataStore.data
        .map { preferences ->
            val selectionString = preferences[THEME_KEY] ?: ThemeSelection.FOLLOW_SYSTEM.name
            try {
                ThemeSelection.valueOf(selectionString)
            } catch (e: IllegalArgumentException) {
                ThemeSelection.FOLLOW_SYSTEM
            }
        }

    val tutorialCompletedFlow: Flow<Boolean> = context.dataStore.data
        .map { preferences ->
            preferences[TUTORIAL_COMPLETED_KEY] ?: false
        }

    suspend fun setThemeSelection(themeSelection: ThemeSelection) {
        context.dataStore.edit { preferences ->
            preferences[THEME_KEY] = themeSelection.name
        }
    }

    suspend fun setTutorialCompleted(completed: Boolean) {
        context.dataStore.edit { preferences ->
            preferences[TUTORIAL_COMPLETED_KEY] = completed
        }
    }
}

