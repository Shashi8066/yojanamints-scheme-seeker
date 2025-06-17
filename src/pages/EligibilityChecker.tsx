
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, AlertCircle } from "lucide-react";

const EligibilityChecker = () => {
  const [formData, setFormData] = useState({
    ageGroup: "",
    category: "",
    occupation: "",
    income: "",
    state: ""
  });
  const [results, setResults] = useState<any[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const checkEligibility = () => {
    const eligibleSchemes = [];

    // PM Kisan Samman Nidhi
    if (formData.occupation === "farmer" && (formData.income === "<1L" || formData.income === "1L-5L")) {
      eligibleSchemes.push({
        name: "PM Kisan Samman Nidhi",
        description: "Financial support of ₹6,000 per year to small & marginal farmers.",
        link: "https://pmkisan.gov.in",
        category: "Agriculture"
      });
    }

    // NSP Scholarship
    if (formData.occupation === "student" && (formData.category === "SC" || formData.category === "ST") && formData.income !== "10L+") {
      eligibleSchemes.push({
        name: "NSP Scholarship 2024",
        description: "Financial assistance for SC/ST students pursuing higher education.",
        link: "https://scholarships.gov.in",
        category: "Education"
      });
    }

    // PM Ujjwala Yojana
    if (formData.occupation === "woman" && (formData.income === "<1L" || formData.income === "1L-5L")) {
      eligibleSchemes.push({
        name: "Pradhan Mantri Ujjwala Yojana",
        description: "Free LPG connection and subsidized refills for women from BPL families.",
        link: "https://pmuy.gov.in",
        category: "Women Welfare"
      });
    }

    // PM Awas Yojana
    if ((formData.income === "<1L" || formData.income === "1L-5L" || formData.income === "5L-10L")) {
      eligibleSchemes.push({
        name: "Pradhan Mantri Awas Yojana",
        description: "Affordable housing scheme with subsidized home loans.",
        link: "https://pmaymis.gov.in",
        category: "Housing"
      });
    }

    // Senior Citizen schemes
    if (formData.ageGroup === "60+") {
      eligibleSchemes.push({
        name: "Pradhan Mantri Vaya Vandana Yojana",
        description: "Pension scheme providing assured returns for senior citizens.",
        link: "https://licindia.in",
        category: "Senior Citizens"
      });
    }

    // Mudra Yojana
    if (formData.occupation === "unemployed" || formData.occupation === "self-employed") {
      eligibleSchemes.push({
        name: "Pradhan Mantri Mudra Yojana",
        description: "Collateral-free loans up to ₹10 lakhs for micro enterprises.",
        link: "https://mudra.org.in",
        category: "Employment"
      });
    }

    setResults(eligibleSchemes);
    setIsChecked(true);
  };

  const resetForm = () => {
    setFormData({
      ageGroup: "",
      category: "",
      occupation: "",
      income: "",
      state: ""
    });
    setResults([]);
    setIsChecked(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Check Your Yojana Eligibility
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Answer a few simple questions to discover which government schemes you may be eligible for. 
          Get personalized results based on your profile.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Please fill in your details to check scheme eligibility
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age Group
              </label>
              <Select value={formData.ageGroup} onValueChange={(value) => setFormData({...formData, ageGroup: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select age group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<18">Under 18</SelectItem>
                  <SelectItem value="18-40">18 - 40 years</SelectItem>
                  <SelectItem value="41-60">41 - 60 years</SelectItem>
                  <SelectItem value="60+">60+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="OBC">OBC</SelectItem>
                  <SelectItem value="SC">SC</SelectItem>
                  <SelectItem value="ST">ST</SelectItem>
                  <SelectItem value="EWS">EWS</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Occupation/Status
              </label>
              <Select value={formData.occupation} onValueChange={(value) => setFormData({...formData, occupation: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select occupation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">Farmer</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="woman">Woman</SelectItem>
                  <SelectItem value="disabled">Disabled</SelectItem>
                  <SelectItem value="unemployed">Unemployed</SelectItem>
                  <SelectItem value="self-employed">Self-employed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Income
              </label>
              <Select value={formData.income} onValueChange={(value) => setFormData({...formData, income: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select income range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<1L">Less than ₹1 Lakh</SelectItem>
                  <SelectItem value="1L-5L">₹1 - 5 Lakhs</SelectItem>
                  <SelectItem value="5L-10L">₹5 - 10 Lakhs</SelectItem>
                  <SelectItem value="10L+">Above ₹10 Lakhs</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <Select value={formData.state} onValueChange={(value) => setFormData({...formData, state: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent className="max-h-48">
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={checkEligibility} 
              disabled={!formData.ageGroup || !formData.category || !formData.occupation || !formData.income || !formData.state}
              className="flex-1"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Check Eligibility
            </Button>
            <Button variant="outline" onClick={resetForm}>
              Reset Form
            </Button>
          </div>
        </CardContent>
      </Card>

      {isChecked && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              Eligibility Results
            </CardTitle>
            <CardDescription>
              Based on your profile, you may be eligible for the following schemes:
            </CardDescription>
          </CardHeader>
          <CardContent>
            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((scheme, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">{scheme.name}</h3>
                      <Badge variant="outline">{scheme.category}</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{scheme.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Check Official Site
                      </a>
                    </Button>
                  </div>
                ))}
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-yellow-800 font-medium">Important Note</p>
                      <p className="text-sm text-yellow-700 mt-1">
                        Results are indicative only. Visit official portals for final eligibility verification and to apply for schemes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Matching Schemes Found</h3>
                <p className="text-gray-600 mb-4">
                  Based on your current profile, we couldn't find matching schemes. Try adjusting your criteria or check back later for new schemes.
                </p>
                <Button variant="outline" onClick={resetForm}>
                  Try Different Criteria
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EligibilityChecker;
