import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph, Appbar, Avatar } from 'react-native-paper';

const LeftContent = props => (
    <Avatar.Image {...props} size={40} source={require('./11.jpg')} />
  );
  
const HomeScreen = ({ navigation }) => {
  return (
    <>

      <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Reevvvyy" subtitle="Welcome Everybody" left={LeftContent} />
          <Card.Content>
            <Title>Attention</Title>
            <Paragraph>
              Tugas5 Muhammad Revi Suryandi (Si Quots Handal)
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => navigation.navigate('Details')}>
              Learn More
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'stretch',
  },
  card: {
    marginVertical: 10,
  },
});

export default HomeScreen;