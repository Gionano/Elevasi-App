package com.example.elevasi.feature.plant

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.elevasi.data.model.VirtualPlantStatusDto
import com.example.elevasi.data.repository.PlantRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

data class VirtualPlantUiState(
    val isLoading: Boolean = true,
    val isAddingExp: Boolean = false,
    val plant: VirtualPlantStatusDto? = null,
    val errorMessage: String? = null
)

class VirtualPlantViewModel(
    private val repository: PlantRepository = PlantRepository()
) : ViewModel() {

    private val _uiState = MutableStateFlow(VirtualPlantUiState())
    val uiState: StateFlow<VirtualPlantUiState> = _uiState.asStateFlow()

    init {
        loadPlant()
    }

    fun loadPlant() {
        viewModelScope.launch {
            _uiState.update { current ->
                current.copy(
                    isLoading = true,
                    errorMessage = null
                )
            }

            runCatching {
                repository.getPlantStatus()
            }.fold(
                onSuccess = { plant ->
                    _uiState.value = VirtualPlantUiState(
                        isLoading = false,
                        plant = plant
                    )
                },
                onFailure = {
                    _uiState.value = VirtualPlantUiState(
                        isLoading = false,
                        plant = repository.fallbackPlantStatus(),
                        errorMessage = "Tanaman belum tersambung ke server. Menampilkan status lokal sementara."
                    )
                }
            )
        }
    }

    fun addExp(amount: Int = 10) {
        viewModelScope.launch {
            _uiState.update { current ->
                current.copy(
                    isAddingExp = true,
                    errorMessage = null
                )
            }

            runCatching {
                repository.addPlantExp(amount)
            }.fold(
                onSuccess = { plant ->
                    _uiState.update { current ->
                        current.copy(
                            isAddingExp = false,
                            plant = plant,
                            errorMessage = null
                        )
                    }
                },
                onFailure = {
                    _uiState.update { current ->
                        current.copy(
                            isAddingExp = false,
                            errorMessage = "EXP belum berhasil ditambahkan ke tanaman."
                        )
                    }
                }
            )
        }
    }
}
