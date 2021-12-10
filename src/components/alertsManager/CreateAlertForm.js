import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../auth/AuthContext';
import {
    Listbox,
    ListboxInput,
    ListboxButton,
    ListboxPopover,
    ListboxList,
    ListboxOption,
  } from "@reach/listbox";
  import "@reach/listbox/styles.css";

import { getPlants } from '../../api/plantAPI';
import { addAlertParameters } from '../../api/zonesAPI';
import { getReadingTypes } from '../../api/readingTypeAPI';


export const CreateAlertForm = ({zone, zoneID}) => {

    const { userAuth } = useContext(AuthContext);

    const [plants, setPlants] = useState([]);
    const [readingTypes, setReadingTypes] = useState([]);
    // const [sensors, setSensors] = useState([]);

    const [selectedPlant, setSelectedPlant] = useState("default");
    const [selectedReadingType, setSelectedReadingType] = useState("default");

    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    
    const onSubmit = async (data) => {
        const res = await addAlertParameters(zoneID, {
            ...data,
            plantID: selectedPlant,
            readingTypeID: selectedReadingType
        }, userAuth?.token);

        console.log(res);
        reset();
    };

    useEffect(() => {
        if(!zone?.plants) return;   
        console.log(zone.sensors);

        setPlants(zone.plants);
        

        // (async () => {
        //     const zone_plants = [];

        //     zone.plants.forEach(-)
        // })();


        // (async () => {
        //     const {data: all_plants} = await getPlants(userAuth?.token);
        //     setPlants(all_plants || []);
        // })();

        (async () => {
            const {data: all_readingTypes} = await getReadingTypes(userAuth?.token);
            setReadingTypes(all_readingTypes || []);
        })();
    }, [zone]);

    useEffect(() => {
        console.log(selectedReadingType);
    }, [selectedReadingType])

    useEffect(() => {
        console.log(selectedPlant);
    }, [selectedPlant])

    return (
			<form className="create-alert-form" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Listbox aria-labelledby="my-label" onChange={setSelectedPlant}>
						<ListboxOption value="default">Choose a plant 🌱</ListboxOption>
						{plants.map((plant) => (
							<ListboxOption value={plant._id}>{plant.name}</ListboxOption>
						))}
					</Listbox>
				</div>

                <div>
					<Listbox aria-labelledby="my-label" onChange={setSelectedReadingType}>
						<ListboxOption value="default">Choose a reading type 📋</ListboxOption>
						{readingTypes.map((readingType) => (
							<ListboxOption value={readingType._id}>{readingType.name}</ListboxOption>
						))}
					</Listbox>
				</div>
{/* notifyPriority, notifyEmail, notifyWeb */}
				{/* register your input into the hook by invoking the "register" function */}
				<input placeholder="minimun value" type="number" step="0.01" {...register("minValue")} />

				{/* include validation with required or other standard HTML validation rules */}
				<input placeholder="maximun value" type="number" step="0.01" {...register("maxValue")} />

				<input placeholder="danger level" type="number"{...register("dangerLevel")} />

				<input placeholder="notification priority" type="number" {...register("notifyPriority")} />

                <label htmlFor="notifications.email"> 
                    <input id="notifications.email" type="checkbox" {...register("notifyEmail")} />
                    {' '}Notificacion web
                </label>
				
                <label htmlFor="notifications.web">
                    <input id="notifications.web" type="checkbox" {...register("notifyWeb")} />
                    {' '}Notificacion via email
                </label>

				<input className="btn" type="submit" />
			</form>
		);
}
