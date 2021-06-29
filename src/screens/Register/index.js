import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import RegisterComponent from '../../components/Signup';
import axiosInstance from '../../helpers/axiosIntreceptor';

const SingUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axiosInstance.get('/contacts').catch(err => {
      console.log('err', err.response);
    });
  }, []);

  const onChange = ({name, value}) => {
    setForm({
      ...form,
      [name]: value,
    });

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'Password needs minimum 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is require'};
      });
    }
  };

  const onSubmit = () => {
    console.log('form :>>', form);

    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a Username'};
      });
    }

    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add First Name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add Last Name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add Email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add Password'};
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};
export default SingUp;
