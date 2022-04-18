import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Header, Text } from '../../components'
import { HomeNavigationProps } from '../../components/Navigation'
import { Box, makeStyles, Theme } from '../../components/Theme'
import TopCurve from './TopCurve'

import Graph, { DataPoint } from './Graph/Graph'
import Transaction from './Transaction'

const startDate = new Date('2021-05-10').getTime()
const numberOfMonths = 6
const footerHeight = Dimensions.get('window').width / 3.3

const data: DataPoint[] = [
  {
    date: new Date('2021-05-10').getTime(),
    value: 60.03,
    color: 'primary',
    id: 1,
  },
  {
    date: new Date('2021-06-10').getTime(),
    value: 200,
    color: 'yellow',
    id: 2,
  },
  {
    date: new Date('2021-07-10').getTime(),
    value: 281.12,
    color: 'orange',
    id: 3,
  },
  {
    date: new Date('2021-08-10').getTime(),
    value: 250.08,
    color: 'violet',
    id: 4,
  },
  {
    date: new Date('2021-09-10').getTime(),
    value: 180,
    color: 'pink',
    id: 5,
  },
  {
    date: new Date('2021-10-10').getTime(),
    value: 190.9,
    color: 'darkBlue',
    id: 6,
  },
]

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<'TransactionHistory'>) => {
  const styles = useStyles()
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="TRANSACTION HISTORY"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'share', onPress: () => true }}
      />
      <Box flex={1} padding="l">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Text variant="header" color="black" opacity={0.3}>
              TOTAL SPENT
            </Text>
            <Text variant="title2">$619,69</Text>
          </Box>
          <Box backgroundColor="primary" borderRadius="l" padding="s">
            <Text color="white">All Time</Text>
          </Box>
        </Box>
        <Graph
          data={data}
          startDate={startDate}
          numberOfMonths={numberOfMonths}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          {data.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ScrollView>
      </Box>
      <TopCurve {...{ footerHeight }} />
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        height={footerHeight}
      >
        <Image
          style={styles.footer}
          source={require('../../components/assets/patterns/3.png')}
        />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}))

export default TransactionHistory
