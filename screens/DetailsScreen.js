import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph, Appbar, Avatar } from 'react-native-paper';

const LeftContent = props => (
    <Avatar.Image {...props} size={50} source={require('./11.jpg')} />
);

const DetailsScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="Reevvvyy" subtitle="Description" left={LeftContent} titleStyle={styles.title} subtitleStyle={styles.subtitle} />
                <Card.Content>
                    <Title style={styles.contentTitle}>Izin kata kata hari ini bang</Title>
                    <Paragraph style={styles.paragraph}>
                        Sukailah dirimu sendiri, orang tidak harus menyukaimu dan kamu tidak perlu peduli✨
                    </Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" style={styles.button} onPress={() => navigation.goBack()}>
                        Back to Dashboard
                    </Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 24,
        backgroundColor: '#1e1e1e',
    },
    card: {
        backgroundColor: '#333',
        marginVertical: 12,
        borderRadius: 12,
        elevation: 6,
    },
    title: {
        color: '#ff9800',
    },
    subtitle: {
        color: '#8bc34a',
    },
    contentTitle: {
        color: '#ffffff',
        fontSize: 20,
        marginBottom: 8,
    },
    paragraph: {
        color: '#bdbdbd',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#ff5722',
        marginTop: 10,
    },
});

export default DetailsScreen;
