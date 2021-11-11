import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import Appointment from '../../components/Appointment'
import ButtonAdd from '../../components/ButtonAdd'
import CategorySelect from '../../components/CategorySelect'
import ListDivider from '../../components/ListDivider'
import ListHeader from '../../components/ListHeader'
import Profile from '../../components/Profile'
import styles from './styles'

const Home: React.FC = () => {
  const [category, setCategory] = useState(0)

  const handleCategorySelect = (categoryId: number) => {
    categoryId === category ? setCategory(0) : setCategory(categoryId)
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: 1,
      date: '20/02 ás 20:40h',
      title: 'League of Legends',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: 1,
      date: '20/02 ás 20:40h',
      title: 'League of Legends',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect 
          categorySelected={category}
          handleCategorySelect={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader 
            title='Partidas agendadas'
            subTitle='Total 6'
          />
          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment data={ item }/>
            )}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </View>
    </View>
  )
}

export default Home