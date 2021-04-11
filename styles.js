import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FC9C73',
        padding: 20
    },
    logo: {
        width: 40,
        height: 40
    },
    body: {
        flex: 1
    },
    features: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FC9C73',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    nameLink: {
        paddingTop: 10,
        fontSize: 25,
        color: 'blue'
    },
    header: {
       paddingTop: 20,
       paddingBottom: 5,
       fontSize: 30
    },
    subHeader: {
        paddingBottom: 5,
        fontSize: 20
    },
    profPic: {
        marginTop: 20,
        width: 150,
        height: 150
    },
    buttonContainer: {
        padding: 5
    },
    buttonContainerRow: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FC9C73',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    websites: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FC9C73',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    homeButtons: {
        padding: 20,
        backgroundColor: 'grey'
    },
    websiteButtons: {
        padding: 20,
        backgroundColor: 'grey',
    },
    actionButtons: {
        backgroundColor: '#8CE2D1',
        padding: 20,
    }

})