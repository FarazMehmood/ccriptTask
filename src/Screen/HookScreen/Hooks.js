import { Text, View, TouchableOpacity } from 'react-native';
import Imperial from '../../Component/ImperialComponent/Imperial';
import Metric from '../../Component/MetricComponent/Metric';
import styles from '../HomeScreen/styles';
import { useDataContext } from '../../ContextApi/DataContext'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useState, useEffect } from 'react';

const Hooks = () => {

    const [isImperial, setIsImperial] = useState(true);
    const [pounds, setPounds] = useState(''); 
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState(''); 
    const { data, setData } = useDataContext();
    const [kgs, setKgs] = useState(''); 
    const [Meters, setMeters] = useState('');

    useEffect(() => {
        console.log('Data in Splash:', data);
    }, [data]);

    useEffect(() => {
        setPounds(data.imperial.pounds || '');
        setFeet(data.imperial.feet || '');
        setInches(data.imperial.inches || '');
        setKgs(data.metric.kilograms || '');
        setMeters(data.metric.meters || '');
    }, [data]);


    const handleSaveToDisk = () => {
        const newData = {
            imperial: {
                pounds: pounds,
                feet: feet,
                inches: inches,
            },
            metric: {
                kilograms: kgs,
                meters: Meters,
            },
        };

        setData(newData);
        console.log('Data saved to context 3', newData);
    };

    // Log the data in the console
    console.log('Data in context: 4', data);


    return (
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={styles.container}>
                <Text style={styles.txt}>Unit Conversion Using HOOKS </Text>

                {isImperial ? (
                    <Imperial
                        pounds={pounds} 
                        feet={feet}
                        inches={inches} 
                        setPounds={setPounds}
                        setFeet={setFeet}
                        setInches={setInches} 
                    />
                ) : (
                    <Metric
                      kgs={kgs}
                      setKgs={setKgs}
                      Meters={Meters} 
                      setMeters={setMeters}
                    />
                )}
                <View style={styles.ButtonView}>
                    <TouchableOpacity onPress={() => setIsImperial(true)} style={{width:'50%',alignSelf:'center'}}>
                        <Text style={[isImperial ? styles.selectedButton : styles.button, styles.leftButton]}>Imperial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsImperial(false)} style={{width:'50%'}}>
                        <Text style={[!isImperial ? styles.selectedButton : styles.button, styles.rightButton]}>Metric</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttons} onPress={handleSaveToDisk}>
                        <Text style={{ color: 'white' }}>Save to disk</Text>
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignSelf: 'center' , color:'white'}}> Reset</Text>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Hooks;
