import { ref, computed } from '@nuxtjs/composition-api';
import { useVSFContext } from '@vue-storefront/core';

export const useMeme = (): any => {
  const context = useVSFContext();
  const result = ref(null);
  const loading = ref(false);
  const error = ref({
    getMemes: null,
    createMeme: null,
  });

  const getMemes = async () => {
    try {
      loading.value = true;
      result.value = await context.$memegenerator.api.getMemes();
      error.value.getMemes = null;
    } catch (err) {
      error.value.getMemes = err;
    } finally {
      loading.value = false;
    }
  };

  const createMeme = async (params) => {
    try {
      loading.value = true;
      const data = await context.$memegenerator.api.createMeme(params);
      error.value.getMemes = null;
      return data;
    } catch (err) {
      error.value.getMemes = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    getMemes,
    createMeme,
    result: computed(() => result.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
  };
};
