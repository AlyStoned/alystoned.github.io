import { include } from "named-urls";


export default {
   home: '/',
   cases: include('/cases', {
      all: '',
      detail: include(':slug', {
         show: ''
      })
   })
};
