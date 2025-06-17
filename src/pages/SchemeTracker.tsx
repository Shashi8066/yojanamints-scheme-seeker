import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, ExternalLink, Search, Filter, Calendar, MapPin, Users } from "lucide-react";

const SchemeTracker = () => {
  const [sectorFilter, setSectorFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const liveSchemes = [
    {
      id: 1,
      name: "PM Vishwakarma Yojana",
      startDate: "2024-01-15",
      endDate: "2024-12-31",
      state: "PAN India",
      sector: "Artisans & Self-employed",
      link: "https://pmvishwakarma.gov.in",
      description: "₹15,000 toolkit incentive + training for traditional workers like carpenters, blacksmiths, potters",
      status: "Active",
      beneficiaries: "18 traditional trades covered"
    },
    {
      id: 2,
      name: "Digital India Land Records",
      startDate: "2024-02-01",
      endDate: "2024-11-30",
      state: "Multiple States",
      sector: "Digital Services",
      link: "https://digitalindia.gov.in",
      description: "Digitization of land records with online access and verification services",
      status: "Active",
      beneficiaries: "Land owners across India"
    },
    {
      id: 3,
      name: "Pradhan Mantri Matsya Sampada Yojana",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      state: "Coastal States",
      sector: "Fisheries",
      link: "https://pmmsy.dof.gov.in",
      description: "₹20,050 crore investment for sustainable development of fisheries sector",
      status: "Active",
      beneficiaries: "Fishermen and fish farmers"
    },
    {
      id: 4,
      name: "National Solar Mission Phase II",
      startDate: "2024-03-01",
      endDate: "2025-02-28",
      state: "PAN India",
      sector: "Renewable Energy",
      link: "https://mnre.gov.in",
      description: "Rooftop solar installation with 40% subsidy for residential users",
      status: "Active",
      beneficiaries: "Homeowners and institutions"
    },
    {
      id: 5,
      name: "Startup India Seed Fund Scheme",
      startDate: "2024-01-10",
      endDate: "2024-12-15",
      state: "PAN India",
      sector: "Entrepreneurship",
      link: "https://startupindia.gov.in",
      description: "₹945 crore fund to provide financial assistance to startups for proof of concept and prototype development",
      status: "Active",
      beneficiaries: "Early-stage startups"
    },
    {
      id: 6,
      name: "PM Street Vendor's AtmaNirbhar Nidhi",
      startDate: "2024-02-15",
      endDate: "2024-10-31",
      state: "PAN India",
      sector: "Micro Finance",
      link: "https://pmsvanidhi.mohua.gov.in",
      description: "Collateral-free loans up to ₹50,000 for street vendors affected by COVID-19",
      status: "Ending Soon",
      beneficiaries: "Street vendors"
    },
    {
      id: 7,
      name: "National Education Policy Implementation",
      startDate: "2024-04-01",
      endDate: "2025-03-31",
      state: "PAN India",
      sector: "Education",
      link: "https://nep.gov.in",
      description: "Digital infrastructure development in schools with ₹1.2 lakh crore allocation",
      status: "Recently Launched",
      beneficiaries: "Students and educational institutions"
    },
    {
      id: 8,
      name: "Ayushman Bharat Digital Mission",
      startDate: "2024-01-20",
      endDate: "2024-12-20",
      state: "PAN India",
      sector: "Healthcare",
      link: "https://abdm.gov.in",
      description: "Digital health ID for every citizen with integrated health records",
      status: "Active",
      beneficiaries: "All Indian citizens"
    }
  ];

  const sectors = ["All Sectors", "Agriculture", "Education", "Healthcare", "Entrepreneurship", "Digital Services", "Renewable Energy", "Fisheries", "Artisans & Self-employed", "Micro Finance"];
  const states = ["All States", "PAN India", "Multiple States", "Coastal States"];

  const filteredSchemes = liveSchemes.filter(scheme => {
    const matchesSector = !sectorFilter || sectorFilter === "All Sectors" || scheme.sector === sectorFilter;
    const matchesState = !stateFilter || stateFilter === "All States" || scheme.state === stateFilter;
    const matchesSearch = !searchTerm || scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSector && matchesState && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Ending Soon": return "bg-yellow-100 text-yellow-800";
      case "Recently Launched": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Live Government Schemes Tracker
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay updated on active government schemes currently open for applications. 
          Find deadlines, eligibility criteria, and direct links to apply.
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filter Schemes
          </CardTitle>
          <CardDescription>
            Use filters to find schemes relevant to your needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Schemes
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Sector
              </label>
              <Select value={sectorFilter} onValueChange={setSectorFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sector" />
                </SelectTrigger>
                <SelectContent>
                  {sectors.map((sector) => (
                    <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by State
              </label>
              <Select value={stateFilter} onValueChange={setStateFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredSchemes.length} of {liveSchemes.length} active schemes
        </p>
      </div>

      {/* Schemes List */}
      <div className="space-y-6">
        {filteredSchemes.map((scheme) => (
          <Card key={scheme.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-gray-900">{scheme.name}</CardTitle>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {scheme.state}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {scheme.sector}
                    </div>
                  </div>
                </div>
                <Badge className={getStatusColor(scheme.status)}>
                  {scheme.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{scheme.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-green-600" />
                  <span className="font-medium">Start:</span>
                  <span className="ml-1">{new Date(scheme.startDate).toLocaleDateString('en-IN')}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-red-600" />
                  <span className="font-medium">End:</span>
                  <span className="ml-1">{new Date(scheme.endDate).toLocaleDateString('en-IN')}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="font-medium">For:</span>
                  <span className="ml-1">{scheme.beneficiaries}</span>
                </div>
              </div>

              <Button asChild className="w-full">
                <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply Now
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center py-12">
          <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">No Schemes Found</h3>
          <p className="text-gray-600 mb-4">
            No schemes match your current filter criteria. Try adjusting your filters or search terms.
          </p>
          <Button variant="outline" onClick={() => {
            setSectorFilter("");
            setStateFilter("");
            setSearchTerm("");
          }}>
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Information Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <div className="flex items-start">
          <Clock className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Stay Updated</h3>
            <p className="text-blue-800">
              Scheme information is updated regularly based on official government announcements. 
              Application deadlines and eligibility criteria may change. Always verify details on the official portal before applying.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeTracker;
