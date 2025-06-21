import { useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calculator, IndianRupee, AlertCircle } from "lucide-react";

const SubsidyEstimator = () => {
  const [formData, setFormData] = useState({
    scheme: "",
    monthlyIncome: "",
    dependents: "",
    location: "",
    ownHouse: ""
  });
  const [result, setResult] = useState<any>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const schemes = [
    { id: "pmay", name: "PM Awas Yojana (PMAY)", category: "Housing" },
    { id: "pmkisan", name: "PM Kisan Samman Nidhi", category: "Agriculture" },
    { id: "ujjwala", name: "PM Ujjwala Yojana", category: "Women Welfare" },
    { id: "mudra", name: "PM Mudra Yojana", category: "Employment" },
    { id: "ayushman", name: "Ayushman Bharat", category: "Healthcare" }
  ];

  const calculateSubsidy = () => {
    const income = parseInt(formData.monthlyIncome) || 0;
    const annualIncome = income * 12;
    const dependents = parseInt(formData.dependents) || 0;
    let estimatedBenefit = 0;
    let calculation = "";
    let schemeDetails = "";

    switch (formData.scheme) {
      case "pmay":
        if (annualIncome <= 600000 && formData.ownHouse === "no") {
          if (formData.location === "urban") {
            estimatedBenefit = 267000;
            calculation = "Credit Linked Subsidy: ₹2.67 lakhs (6.5% interest subsidy for 20 years on loan up to ₹6 lakhs)";
          } else {
            estimatedBenefit = 130000;
            calculation = "Rural housing grant: ₹1.30 lakhs for plain areas, ₹1.20 lakhs for hilly states";
          }
          schemeDetails = "PM Awas Yojana provides affordable housing for all by 2022. The scheme offers credit-linked subsidies and direct grants based on location and income criteria. Beneficiaries get interest subsidy on home loans, making homeownership more accessible. The subsidy amount varies based on carpet area and location (urban/rural). Additional benefits include priority allocation in government housing projects and access to essential amenities.";
        }
        break;
      
      case "pmkisan":
        estimatedBenefit = 6000;
        calculation = "Annual benefit: ₹6,000 paid in 3 equal installments of ₹2,000 each (April-July, August-November, December-March)";
        schemeDetails = "PM Kisan Samman Nidhi is a direct benefit transfer scheme for small and marginal farmers. The scheme provides financial assistance to supplement the financial needs of farmers in procuring various inputs to ensure proper crop health and appropriate yields. The income support is provided directly into the bank accounts of beneficiary farmers. Eligibility includes farmers with cultivable land up to 2 hectares, subject to verification of land records.";
        break;
      
      case "ujjwala":
        estimatedBenefit = 6400;
        calculation = "LPG connection: ₹1,600 + Refill subsidy: ₹400/month × 12 months = ₹6,400 annually";
        schemeDetails = "PM Ujjwala Yojana aims to provide clean cooking fuel to women from BPL households. The scheme covers the security fee for LPG connection, equipment cost, and provides subsidized refills. Beneficiaries receive free LPG connections with the first refill free, followed by subsidized subsequent refills. The scheme has significantly reduced indoor air pollution and improved women's health by replacing traditional cooking methods with clean LPG.";
        break;
      
      case "mudra":
        if (formData.location === "rural") {
          estimatedBenefit = 50000;
          calculation = "Shishu category loan: Up to ₹50,000 (interest rates: 10-12% typically)";
        } else {
          estimatedBenefit = 500000;
          calculation = "Kishore category loan: Up to ₹5,00,000 (interest rates: 11-14% typically)";
        }
        schemeDetails = "PM Mudra Yojana provides collateral-free loans to micro enterprises. The scheme is divided into three categories: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakhs), and Tarun (₹5 lakhs to ₹10 lakhs). These loans help individuals start or expand small businesses, promoting entrepreneurship and self-employment. The scheme covers various sectors including manufacturing, trading, and service activities, with special focus on women entrepreneurs and SC/ST beneficiaries.";
        break;
      
      case "ayushman":
        estimatedBenefit = 500000;
        calculation = "Health insurance coverage: ₹5,00,000 per family per year for secondary and tertiary care hospitalization";
        schemeDetails = "Ayushman Bharat provides comprehensive health coverage to vulnerable families. The scheme covers hospitalization expenses up to ₹5 lakhs per family per year, including pre and post-hospitalization expenses. It covers over 1,400 medical packages including surgery, medical and day care treatments, and diagnostic procedures. The scheme is paperless and cashless at point of service, with beneficiaries identified through Socio Economic Caste Census (SECC) database.";
        break;
    }

    if (estimatedBenefit > 0) {
      setResult({
        amount: estimatedBenefit,
        calculation,
        schemeDetails,
        schemeName: schemes.find(s => s.id === formData.scheme)?.name
      });
    } else {
      setResult({
        amount: 0,
        calculation: "Based on your income and criteria, you may not be eligible for this scheme or the benefit amount cannot be determined.",
        schemeDetails: "",
        schemeName: schemes.find(s => s.id === formData.scheme)?.name
      });
    }
    setIsCalculated(true);
  };

  const resetForm = () => {
    setFormData({
      scheme: "",
      monthlyIncome: "",
      dependents: "",
      location: "",
      ownHouse: ""
    });
    setResult(null);
    setIsCalculated(false);
  };

  return (
    <>
      <Helmet>
        <title>Government Subsidy Benefits Estimator - Calculate Yojana Benefits | YojanaMints</title>
        <meta name="description" content="Estimate potential financial benefits and subsidies under government schemes like PMAY, PM Kisan, Ujjwala Yojana. Free subsidy calculator for citizens." />
        <meta name="keywords" content="subsidy calculator, government benefits estimator, PMAY calculator, PM Kisan benefits, scheme benefits calculator" />
        <meta name="author" content="YojanaMints" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yojanamints.com/subsidy-estimator" />
        
        <meta property="og:title" content="Government Subsidy Benefits Estimator - Calculate Your Benefits" />
        <meta property="og:description" content="Estimate potential financial benefits and subsidies you could receive under various government schemes." />
        <meta property="og:url" content="https://yojanamints.com/subsidy-estimator" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Government Subsidy Calculator - Estimate Your Benefits" />
        <meta name="twitter:description" content="Calculate potential subsidies and benefits from Indian government schemes." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Subsidy Benefits Estimator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate potential financial benefits and subsidies you could receive under various government schemes. 
            Get detailed breakdown of eligibility and benefit amounts.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Scheme Details</CardTitle>
            <CardDescription>
              Select a scheme and provide your details to estimate potential benefits
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose Government Scheme
              </label>
              <Select value={formData.scheme} onValueChange={(value) => setFormData({...formData, scheme: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a scheme" />
                </SelectTrigger>
                <SelectContent>
                  {schemes.map((scheme) => (
                    <SelectItem key={scheme.id} value={scheme.id}>
                      <div>
                        <div className="font-medium">{scheme.name}</div>
                        <div className="text-sm text-gray-500">{scheme.category}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Income (₹)
                </label>
                <Input
                  type="number"
                  placeholder="Enter monthly income"
                  value={formData.monthlyIncome}
                  onChange={(e) => setFormData({...formData, monthlyIncome: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Dependents
                </label>
                <Input
                  type="number"
                  placeholder="Enter number of dependents"
                  value={formData.dependents}
                  onChange={(e) => setFormData({...formData, dependents: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urban">Urban</SelectItem>
                    <SelectItem value="rural">Rural</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you own a house?
                </label>
                <Select value={formData.ownHouse} onValueChange={(value) => setFormData({...formData, ownHouse: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ownership status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={calculateSubsidy} 
                disabled={!formData.scheme || !formData.monthlyIncome || !formData.location}
                className="flex-1"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calculate Benefits
              </Button>
              <Button variant="outline" onClick={resetForm}>
                Reset Form
              </Button>
            </div>
          </CardContent>
        </Card>

        {isCalculated && result && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <IndianRupee className="w-5 h-5 text-green-600 mr-2" />
                Estimated Benefits - {result.schemeName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700 mb-2">
                      ₹{result.amount.toLocaleString('en-IN')}
                    </div>
                    <p className="text-green-600 font-medium">
                      {result.amount > 0 ? "Estimated Annual Benefit" : "Not Eligible"}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Calculation Breakdown</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">{result.calculation}</p>
                  </div>
                </div>

                {result.schemeDetails && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Scheme</h3>
                    <p className="text-gray-700 leading-relaxed">{result.schemeDetails}</p>
                  </div>
                )}

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm text-yellow-800 font-medium">Important Disclaimer</p>
                      <p className="text-sm text-yellow-700 mt-1">
                        This is an estimated calculation based on general scheme parameters. Actual benefits may vary based on 
                        official verification, current scheme guidelines, and individual circumstances. Please visit the official 
                        scheme portal for accurate information and to apply.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default SubsidyEstimator;
