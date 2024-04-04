import styles from './plainForm.module.css';

// Yup 
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

const PlainForm = () => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('* Du skal skrive et navn'),
        email: Yup.string().required('* Du skal skrive en email').email('* Skal være en korrekt email'),
        message: Yup.string().required('* Vær venlig at skrive en besked'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm(
        {
            resolver: yupResolver(validationSchema),
        }
    );


    const onSubmit = (data) => {

        let dataToSend = {
            'name' : data.name,
            'email' : data.email,
            'message': data.message
        }

        fetch(`https://smuknu.webmcdm.dk/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),

        }).then(res => res.json()).then(data => {

            console.log(data);

        });
            
    };



    return (
        <div className={styles.container}>
            PlainForm
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name
                    <input type="text" {...register('name')}></input>
                    {errors.name?.message && <p>{errors.name?.message}</p>}
                </label>
                <label>
                    Email
                    <input type="email" {...register('email')}></input>
                    {errors.email?.message && <p>{errors.email?.message}</p>}
                </label>
                <label>
                message
                <textarea {...register('message')}></textarea>
                    {errors.message?.message && <p>{errors.message?.message}</p>}
                </label>
               
            
                <button>Opret</button>
            </form>
        </div>
    )
};
export default PlainForm