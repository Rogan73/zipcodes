import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useData = defineStore('Data', () => {

    const location = ref({})
    let search = ref('')
    const Zip = ref([])
    const params = ref([])

    const setParams = (key, value) => {
        params.value.push({
            title: key,
            value
        })

    }

    const gParams = computed((v) => {
        return params.value
    })

    let active = ref(false)

    const gZip = computed(() => {
        return Zip.value
    })

    const setZip = (v) => {
        Zip.value = v
    }


    const gLocation = computed(() => {
        return location.value
    })

    const setLocation = (v) => {
        location.value = v
    }



    const loadLocaction = () => {
        axios.get('http://ip-api.com/json').then(res => {
            setLocation(res.data)
            active.value = true;
            //console.log(res.data);
        })
    }

    const loadParams = () => {
        let uri = window.location.search.substring(1);
        let par = new URLSearchParams(uri);
        par.forEach((p, k) => {
            setParams(k, p);
        })

        //console.log(gParams);

    }

    const FindData = () => {

        const options = {
            method: 'GET',
            url: 'https://app.zipcodebase.com/api/v1/search', // for all countries
            params: {
                apikey: 'e4cdf890-c81e-11ed-9c0c-51bdb0686715',
                codes: search.value
            }
        };

        axios.request(options).then((response) => {
            //console.log(response.data.results);
            const res = response.data.results[search.value].filter((v) => v.country_code === 'US')
            setZip(res)

        }).catch(function(error) {
            console.error(error);
        });

    }

    return { gLocation, loadLocaction, search, FindData, active, gZip, loadParams, gParams }

})