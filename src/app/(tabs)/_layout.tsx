import { colors, fontSize } from "@/constants/tokens"
import { BlurView } from "expo-blur"
import { Tabs } from "expo-router"
import { StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons";
import FloatingPlayer from "@/components/FloatingPlayer";

const TabsNavigation = () => {

    return (
        <>
            <Tabs screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: fontSize.xs,
                    fontWeight: '500'
                },
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderTopWidth: 0,
                    paddingTop: 8,
                },
                tabBarBackground: () => (<BlurView intensity={95} style={{ ...StyleSheet.absoluteFillObject, overflow: "hidden", borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />)

            }}>
                <Tabs.Screen name='favorites' options={{
                    title: "Favorites",
                    tabBarIcon: ({ color }) => <FontAwesome name='heart' size={24} color={color} />
                }} />
                <Tabs.Screen name='playlist'
                    options={{
                        title: "Playlist",
                        tabBarIcon: ({ color }) => <FontAwesome name='headphones' size={24} color={color} />
                    }}
                />
                <Tabs.Screen name='(songs)'
                    options={{
                        title: "Songs",
                        tabBarIcon: ({ color }) => <FontAwesome name='music' size={24} color={color} />
                    }}
                />
                <Tabs.Screen name='artists'
                    options={{
                        title: "Artists",
                        tabBarIcon: ({ color }) => <FontAwesome name='users' size={24} color={color} />
                    }}
                />
            </Tabs>
            <FloatingPlayer style={{ 
                position: 'absolute',
                bottom: 78,
                left: 0,
                right: 0,
            }} />
        </>
    )
}

export default TabsNavigation