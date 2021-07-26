  
import axios from 'axios';
import api from '../config';

const config = api()
const client = axios.create(config);
//https://api.stackexchange.com/2.2/users/1264804/questions?order=desc&sort=activity&site=stackoverflow


const commonService = {
  getData(params) {
    return client.request({
      method: 'get',
      url: '/2.2/users/'+params.user_id+'/questions?',
      params: { 'order':params.order,
                'sort':params.sort,
                'site':params.site,},
    });
  },

  
};

export { commonService };