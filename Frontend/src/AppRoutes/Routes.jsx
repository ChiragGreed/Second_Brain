import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Collections from '../Pages/CollectionsPage/Collections'
import KnowledgeGraph from '../Pages/KnowledgeGraphPage/KnowlegeGraph'
import Resurfacing from '../Pages/ResurfacingPage/Resurfacing'
import Dashboard from '../Pages/DashboardPage/Dashboard'
import CollectionDets from '../Pages/CollectionsPage/CollectionDetsPage/CollectionDets'
import ItemDets from '../Pages/ItemDetsPage/ItemDets'
import SearchResult from '../Pages/SearchResultPage/SearchResult'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<App />}>

                    <Route index path='/Inbox' element={<Dashboard />} />

                    <Route index path='/searchResult' element={<SearchResult />} />

                    <Route path='/items/:itemId' element={<ItemDets />} />

                    <Route element={<Collections />} />

                    <Route path="collections" element={<Collections />} />

                    <Route path="collections/:collectionId" element={<CollectionDets />} />

                    <Route path="knowledgeGraph" element={<KnowledgeGraph />} />

                    <Route path="resurfacing" element={<Resurfacing />} />

                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
